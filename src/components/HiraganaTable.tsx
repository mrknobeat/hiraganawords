import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const space = [
    <div className='px-2 opacity-50'>|</div>
]

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
                        <Button size="large" className='lowercase w-28'>あ {space} a</Button>
                        <Button size="large" className='lowercase w-28'>い {space} i</Button>
                        <Button size="large" className='lowercase w-28'>う {space} u</Button>
                        <Button size="large" className='lowercase w-28'>え {space} e</Button>
                        <Button size="large" className='lowercase w-28'>お {space} o</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>か {space} ka</Button>
                        <Button size="large" className='lowercase w-28'>き {space} ki</Button>
                        <Button size="large" className='lowercase w-28'>く {space} ku</Button>
                        <Button size="large" className='lowercase w-28'>け {space} ke</Button>
                        <Button size="large" className='lowercase w-28'>こ {space} ko</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>さ {space} sa</Button>
                        <Button size="large" className='lowercase w-28'>し {space} shi</Button>
                        <Button size="large" className='lowercase w-28'>す {space} su</Button>
                        <Button size="large" className='lowercase w-28'>せ {space} se</Button>
                        <Button size="large" className='lowercase w-28'>そ {space} so</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>た {space} ta</Button>
                        <Button size="large" className='lowercase w-28'>ち {space} chi</Button>
                        <Button size="large" className='lowercase w-28'>つ {space} tsu</Button>
                        <Button size="large" className='lowercase w-28'>て {space} te</Button>
                        <Button size="large" className='lowercase w-28'>と {space} to</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>な {space} na</Button>
                        <Button size="large" className='lowercase w-28'>に {space} ni</Button>
                        <Button size="large" className='lowercase w-28'>ぬ {space} nu</Button>
                        <Button size="large" className='lowercase w-28'>ね {space} ne</Button>
                        <Button size="large" className='lowercase w-28'>の {space} no</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>は {space} ha</Button>
                        <Button size="large" className='lowercase w-28'>ひ {space} hi</Button>
                        <Button size="large" className='lowercase w-28'>ふ {space} fu</Button>
                        <Button size="large" className='lowercase w-28'>へ {space} he</Button>
                        <Button size="large" className='lowercase w-28'>ほ {space} ho</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>ま {space} ma</Button>
                        <Button size="large" className='lowercase w-28'>み {space} mi</Button>
                        <Button size="large" className='lowercase w-28'>む {space} mu</Button>
                        <Button size="large" className='lowercase w-28'>め {space} me</Button>
                        <Button size="large" className='lowercase w-28'>も {space} mo</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>や {space} ya</Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28' >ゆ {space} yu</Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'>よ {space} yo</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>ら {space} ra</Button>
                        <Button size="large" className='lowercase w-28'>り {space} ri</Button>
                        <Button size="large" className='lowercase w-28'>る {space} ru</Button>
                        <Button size="large" className='lowercase w-28'>れ {space} re</Button>
                        <Button size="large" className='lowercase w-28'>ろ {space} ro</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>わ {space} wa</Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'>を {space} wo</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                        <Button size="large" className='lowercase w-28'>ん {space} n</Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'></Button>
                        <Button size="large" className='lowercase w-28'></Button>
                    </ButtonGroup>

                </Box>
            </section>
        </>

    );
}