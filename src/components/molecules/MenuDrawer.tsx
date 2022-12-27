import React, { memo, useCallback } from 'react'
import { 
    Button, 
    Drawer, 
    DrawerBody, 
    DrawerContent, 
    DrawerOverlay,  
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { PagePathUserManagement } from '../../router/PagePaths';
import { PagePathSetting } from '../../router/PagePaths';

type Props = {
    onClose: () => void
    isOpen: boolean
}

export const MenuDrawer  = ((props: Props) => {
    const { isOpen, onClose } = props;

    const navigate = useNavigate();
    const onClickUserManagement = useCallback(() => navigate(PagePathUserManagement),[]);
    const onClickSetting = useCallback(() => navigate(PagePathSetting),[]);

    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody p={0} bg="gray.100">
                <Button w="100%" >TOP</Button>
                <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
                <Button w="100%" onClick={onClickSetting}>設定</Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
    )
});
