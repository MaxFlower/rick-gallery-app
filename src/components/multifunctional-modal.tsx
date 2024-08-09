'use client'

import {
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { ReactNode, useEffect } from 'react'

export default function MultifunctionalModal({ title, opened, children, isProtected = false, handleClose = () => {} }: { title: string, opened: boolean, children: ReactNode, isProtected?: boolean, handleClose?: () => void }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (opened && !isOpen) {
            onOpen()
        } else if (!opened && isOpen) {
            onClose()
        }
    }, [opened]);

    return (
        <Modal isCentered closeOnEsc={!isProtected} closeOnOverlayClick={!isProtected} isOpen={isOpen} onClose={handleClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter={isProtected ? 'blur(10px) hue-rotate(90deg)' : 'blur(2px)'}
            />
            <ModalContent>
                {!isProtected && <ModalCloseButton />}
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
