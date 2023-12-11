import React from 'react';
import { Box, Button, Heading, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box className="header">
      <Image
        src="https://cdn.pixabay.com/photo/2022/01/03/06/11/bicycle-6911749_1280.jpg"
        alt="Fondo"
        className="image"
      />
      <Box className="content-container">
        <Heading fontSize="36px" alignItems="flex-start">
          DOMINA EL TERRENO
        </Heading>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Button className="button">
            VER DETALLES
          </Button>
          <Button className="button">
            VER VIDEO
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
