import { Container } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';



function HomePage() {
    const navigate = useNavigate();

    //les handleChanges
    const handleMenu0 = () => {
        navigate("/accueil");
    };

    const handleMenu1 = () => {
        navigate("/musiques");
    };

    const handleMenu2 = () => {
        navigate("/videos");
    };

    const handleMenu3 = () => {
        navigate("/articles");
    };

    const handleMenu4 = () => {
        navigate("/calendriers");
    };

    const handleMenu5 = () => {
        navigate("/aPropos");
    };

    const handleMenu6 = () => {
        navigate("/meRetrouver");
    };
    return (
        <Container>
        
            <div>
                <AppBar color="secondary" position="static" sx={{alignItems: 'center'}}>
                    <Toolbar>

                        <div>
                            <Button 
                                color="inherit"
                                //pour faire appelle à la fonction handleMenu on utilise onClick 
                                //le bouton Acceuil va dynamiquement affecter la valeur 0 à la constante menu 
                                onClick={handleMenu0}
                            >
                                Accueil
                            </Button>
                        </div>
                        <div>
                            <Button 
                                color="inherit"
                                onClick={handleMenu1}
                            >
                                Musiques
                            </Button>
                        </div>
                        <div>
                            <Button 
                                color="inherit"
                                onClick={handleMenu2}
                            >
                                Vidéos
                            </Button>
                        </div>
                        <div>
                            <Button 
                                color="inherit"
                                onClick={handleMenu3}
                            >
                                Articles
                            </Button>
                        </div>
                        <div>
                          <Button 
                            color="inherit"
                            onClick={handleMenu4}
                          >
                            Calendrier
                          </Button>
                        </div>
                        <div>
                          <Button 
                            color="inherit"
                            onClick={handleMenu5}
                          >
                            Biographie
                          </Button>
                        </div>
                        <div>
                          <Button 
                            color="inherit"
                            onClick={handleMenu6}
                          >
                            Me retrouver
                          </Button>
                        </div>            
                    </Toolbar>
                </AppBar>
            </div>
        <Outlet />
        </Container>
    );
}

export default HomePage;




 
