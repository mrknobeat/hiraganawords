import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const space = [
  <div key="space" className='px-2 opacity-50'>|</div>
];

export default function VariantButtonGroup() {
  return (
    <>
      <section className='container mx-auto flex mb-20'>
        <Box className="w-full"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 0,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="a" size="large" className='lowercase w-28'>あ {space} a</Button>
            <Button key="i" size="large" className='lowercase w-28'>い {space} i</Button>
            <Button key="u" size="large" className='lowercase w-28'>う {space} u</Button>
            <Button key="e" size="large" className='lowercase w-28'>え {space} e</Button>
            <Button key="o" size="large" className='lowercase w-28'>お {space} o</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="ka" size="large" className='lowercase w-28'>か {space} ka</Button>
            <Button key="ki" size="large" className='lowercase w-28'>き {space} ki</Button>
            <Button key="ku" size="large" className='lowercase w-28'>く {space} ku</Button>
            <Button key="ke" size="large" className='lowercase w-28'>け {space} ke</Button>
            <Button key="ko" size="large" className='lowercase w-28'>こ {space} ko</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="sa" size="large" className='lowercase w-28'>さ {space} sa</Button>
            <Button key="shi" size="large" className='lowercase w-28'>し {space} shi</Button>
            <Button key="su" size="large" className='lowercase w-28'>す {space} su</Button>
            <Button key="se" size="large" className='lowercase w-28'>せ {space} se</Button>
            <Button key="so" size="large" className='lowercase w-28'>そ {space} so</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="ta" size="large" className='lowercase w-28'>た {space} ta</Button>
            <Button key="chi" size="large" className='lowercase w-28'>ち {space} chi</Button>
            <Button key="tsu" size="large" className='lowercase w-28'>つ {space} tsu</Button>
            <Button key="te" size="large" className='lowercase w-28'>て {space} te</Button>
            <Button key="to" size="large" className='lowercase w-28'>と {space} to</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="na" size="large" className='lowercase w-28'>な {space} na</Button>
            <Button key="ni" size="large" className='lowercase w-28'>に {space} ni</Button>
            <Button key="nu" size="large" className='lowercase w-28'>ぬ {space} nu</Button>
            <Button key="ne" size="large" className='lowercase w-28'>ね {space} ne</Button>
            <Button key="no" size="large" className='lowercase w-28'>の {space} no</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="ha" size="large" className='lowercase w-28'>は {space} ha</Button>
            <Button key="hi" size="large" className='lowercase w-28'>ひ {space} hi</Button>
            <Button key="fu" size="large" className='lowercase w-28'>ふ {space} fu</Button>
            <Button key="he" size="large" className='lowercase w-28'>へ {space} he</Button>
            <Button key="ho" size="large" className='lowercase w-28'>ほ {space} ho</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="ma" size="large" className='lowercase w-28'>ま {space} ma</Button>
            <Button key="mi" size="large" className='lowercase w-28'>み {space} mi</Button>
            <Button key="mu" size="large" className='lowercase w-28'>む {space} mu</Button>
            <Button key="me" size="large" className='lowercase w-28'>め {space} me</Button>
            <Button key="mo" size="large" className='lowercase w-28'>も {space} mo</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="ya" size="large" className='lowercase w-28'>や {space} ya</Button>
            <Button key="yu" size="large" className='lowercase w-28'></Button>
            <Button key="yo" size="large" className='lowercase w-28'>よ {space} yo</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="ra" size="large" className='lowercase w-28'>ら {space} ra</Button>
            <Button key="ri" size="large" className='lowercase w-28'>り {space} ri</Button>
            <Button key="ru" size="large" className='lowercase w-28'>る {space} ru</Button>
            <Button key="re" size="large" className='lowercase w-28'>れ {space} re</Button>
            <Button key="ro" size="large" className='lowercase w-28'>ろ {space} ro</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="wa" size="large" className='lowercase w-28'>わ {space} wa</Button>
            <Button key="wo" size="large" className='lowercase w-28'></Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button key="n" size="large" className='lowercase w-28'>ん {space} n</Button>
          </ButtonGroup>
        </Box>
      </section>
    </>
  );
}
