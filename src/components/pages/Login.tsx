import { Box, Flex, Heading, Divider, Input, Button, Stack } from '@chakra-ui/react';
import React, { memo,useState, ChangeEvent } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login = memo(() => {

    const { login, loading } = useAuth();

    const [userId, setUserId] = useState<number>(undefined);

    const onChangeuserId = (e: ChangeEvent<HTMLInputElement>) => 
     setUserId(Number(e.target.value));

     const onClickLogin = () => login(userId);
    
    return (
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            ユーザー管理アプリ</Heading>
          <Divider my={4}/>
          <Stack spacing={6} py={4} px={10}>
            <Input placeholder='ユーザーID' value={userId} onChange={onChangeuserId}/>
            <PrimaryButton 
              disabled={userId === undefined} 
              loading={loading} 
              onClick={onClickLogin}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    )
});