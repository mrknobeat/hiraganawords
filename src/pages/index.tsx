import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import HiraganaTable from '@/components/HiraganaTable';
import Navbar from '@/components/Navbar';
import { Button, CircularProgress } from '@mui/material';
import { convertText } from '@/components/TextConvert';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Footer from '@/components/Footer';
import Stack from '@mui/material/Stack';
import { phrases } from '@/components/Phrases';

export default function Home() {
  const [postContent, setPostContent] = React.useState('Copiar');
  const [isCopied, setIsCopied] = useState(false);
  const [confirmationText, setConfirmationText] = useState('Copiar');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [displayedPhrase, setDisplayedPhrase] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  let typingTimeout: string | number | NodeJS.Timeout | null | undefined = null;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(postContent);
    setIsCopied(true);
    setConfirmationText('Texto copiado');
    setIsSnackbarOpen(true);

    setTimeout(() => {
      setIsCopied(false);
      setConfirmationText('Clique no botão para copiar');
      setIsSnackbarOpen(false);
    }, 3000);
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;
    const convertedText = convertText(inputValue);

    setIsTyping(true); // Define que o usuário está digitando

    if (inputValue === '') {
      setPostContent('Copiar');
      setDisplayedPhrase('');
    } else {
      setPostContent(convertedText);

      clearTimeout(typingTimeout); // Limpa o timeout anterior, se existir

      setIsSearching(true); // Define que a busca está em andamento

      // Verifica se a palavra digitada está presente no objeto phrases e define a frase correspondente
      const lowerCaseInput: string = inputValue.toLowerCase();
      if (phrases.hasOwnProperty(lowerCaseInput)) {
        setDisplayedPhrase(phrases[lowerCaseInput]);
      } else {
        setDisplayedPhrase('Frase não encontrada');
      }

      // Define um novo timeout para definir isTyping como false após 1 segundo de inatividade
      typingTimeout = setTimeout(() => {
        setIsTyping(false); // Define que o usuário parou de digitar
        setIsSearching(false); // Define que a busca foi concluída
      }, 1000); // Tempo em milissegundos para considerar inatividade (1 segundo)
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full font-poppins">
        <div className="container mx-auto flex items-center mt-16 mb-10 backzin-3">
          <TextField
            onChange={handleInputChange}
            className="w-full"
            id="outlined-multiline-static"
            label="HIRAGANA KEYBOARD"
            multiline
            rows={6}
          />
        </div>
      </section>

      <Button
        variant="text"
        className="backzin text-2xl normal-case container mx-auto flex h-20  p-4 items-center mb-2 duration-200"
        onClick={handleCopyClick}
      >
        {postContent}
      </Button>

      <div className="text-center text-sm mt-4 mb-4">
        <span className={isCopied ? 'text-principal duration-300' : 'text-gray-500/50 duration-300'}>
          {confirmationText}
        </span>
      </div>

      <section className="container block mx-auto justify-center backzin-3 p-8 border border-divider rounded-md">
        <div className="w-full items-center flex justify-center my-6">
          <div className="items-center flex-wrap">
            <h2 className="text-2xl text-principal">Match Frases</h2>
            <p className="text-white/20 text-[10px]">Encontre frases em português.</p>
          </div>
        </div>
        <div className="text-center mb-4 w-full items-center flex justify-center h-10">
          {isTyping || isSearching ? (
            <CircularProgress /> // Indicador de progresso circular durante a digitação ou busca
          ) : (
            <p>{displayedPhrase}</p> // Exibe a frase encontrada ou "Frase não encontrada"
          )}
        </div>
      </section>

      <HiraganaTable />
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={isSnackbarOpen}
          autoHideDuration={3000}
          onClose={() => setIsSnackbarOpen(false)}
        >
          <Alert onClose={() => setIsSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
            Texto copiado para área de transferência
          </Alert>
        </Snackbar>
      </Stack>

      <Footer />
    </>
  );
}
