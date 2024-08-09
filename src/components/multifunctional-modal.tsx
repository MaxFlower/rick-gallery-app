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

export default function MultifunctionalModal({ title, opened, children }: { title: string, opened: boolean, children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (opened && !isOpen) {
            onOpen()
        } else if (!opened && isOpen) {
            onClose()
        }
    }, [opened]);

    return (
        <Modal isCentered isOpen={isOpen}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
