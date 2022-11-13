import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent='space-between' sx={{ mb: 1}}>

        <Grid item>


            <Typography fontSize={ 39 } fontWeight="ligth"> 28 de Agosto, 2023</Typography>



        </Grid>

        <Grid item>
            <Button>
                <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant='filled'
                fullWidth
                placeholder="Ingrese un titulo"
                label="titulo"
                sx={{border:'none', mb:1}}
                />

            <TextField
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder="¿Que sucedio hoy?"
                minRows={5}
                sx={{border:'none', mb:1}}
                />

        </Grid>


        <ImageGallery />




    </Grid>
  )
}
