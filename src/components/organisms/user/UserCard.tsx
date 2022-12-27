import React, { memo } from 'react'
import { 
    Box, 
    Stack, 
    Image, 
    Text,   
} from '@chakra-ui/react'

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

export const UserCard = ((props: Props) => {
    const { id, imageUrl, userName, fullName, onClick } = props;
    return (
        <Box 
        w="260px" 
        h="260px" 
        bg="white" 
        borderRadius="10px" 
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8}}
        >
         <Stack textAlign="center">
           <Image 
              borderRadius="full" 
              boxSize="160px" 
              src={imageUrl}
              alt={userName}
              m="auto"
              onClick={() => onClick(id)}
            />
          <Text fontSize="lg" fontWeight="bold">{userName}</Text>
          <Text fontSize="sm" color="gray">{fullName}</Text>
        </Stack>
      </Box>
    )
});