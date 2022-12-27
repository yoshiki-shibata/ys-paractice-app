import React, { memo, useCallback } from 'react'
import { 
    Box, 
    Flex, 
    Heading, 
    Link, 
    useDisclosure 
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import { PagePathUserManagement } from '../../../router/PagePaths';
import { PagePathSetting } from '../../../router/PagePaths';


export const Header = memo((props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const navigate = useNavigate();
    const onClickUserManagement = useCallback(() => navigate(PagePathUserManagement),[]);
    const onClickSetting = useCallback(() => navigate(PagePathSetting),[]);

    return (
      <>
      <Flex 
        as="nav" 
        bg="teal.500" 
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex 
          align="center" 
          fontSize="sm" 
          flexGrow={2} 
          display={{base: "none", md: "flex" }}
        >
            <Box pr={4}>
              <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
            </Box>
            <Link onClick={onClickSetting}>設定</Link>
        </Flex>
       <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
    )
});