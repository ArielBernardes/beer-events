import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        color: 'white',
      width: 300,
      height: 360,
      margin: 10,
      background: 'linear-gradient(45deg, rgba(0,0,0,0.5) 30%, #2F7336 95%)',
    },
    media: {
        height: 200,
      
    },
    context: {
        color: 'white',
        display: 'flex',
    },
    title: {
        color: 'white',
        height: 100,
        fontWeight: 'bolder',
    },
    typo: {
        color: 'white',
        flexGrow: 1,
    },
    description: {
        color: 'white',
        fontSize: 10,
        whiteSpace: 'wrap',
        height: 50,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
          },
    },
    btn: {
        marginRight:'5px',
        width: 90,
        fontSize: '10px',
        background: 'black',
        color: 'white',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#2F7336',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#2F7336',
          borderColor: '#2F7336',
        },
        
    }
  });


const Graduation = () => {

    const classes = useStyles();
    const {removeFromGraduation, graduationList} = useContext(GraduationContext);

    return (
        <div style = {{display:'flex', flexWrap: 'wrap'}} >
            {graduationList.map(beer => 
            <Card className = { classes.root } key = {beer.id}>
               
                <CardContent className = {classes.context}>
                    <img className={classes.media} src = {beer.image_url} alt="Beer"/>
                    <CardContent className = {classes.typo}>
                        <Typography className = {classes.title} variant = 'h6'>{beer.name}</Typography>
                        <Typography component = 'p'>{beer.first_brewed}</Typography>
                        <div className = {classes.description}>{beer.description}</div>
                        <div>
                        <Typography variant = 'subtitle1'>{beer.volume.value}{beer.volume.unit}</Typography>
                        </div>
                    </CardContent>
                </CardContent> 
                <Button onClick={() => removeFromGraduation(beer)} className={classes.btn} >Remove from graduation</Button>
            </Card>)}
        </div>
)
}

export default Graduation;