import { useColorModeValue } from '@/components/ui/color-mode'
import { toaster } from "@/components/ui/toaster";
import { useProductStore } from '@/store/product';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from 'react'

function CreatePage() {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    const hoverBg = useColorModeValue("green.600", "green.100");
    const inputBorder = useColorModeValue("gray.400", "gray.600");
    const titleColor = useColorModeValue("gray.600", "gray.200");

    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
      const { success, message } = await createProduct(newProduct);
      if (!success) {
        toaster.create({
          title: "Error",
          description: message,
          status: "error",
          isClosable: true,
        });
      } else {
        toaster.create({
          title: "Success",
          description: message,
          status: "success",
          isClosable: true,
        });
      }
      setNewProduct({ name: "", price: "", image: "" });
    };

    return (
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading
            as={"h1"}
            size={"4xl"}
            textAlign={"center"}
            mb={8}
            color={titleColor}
          >
            Create New Product
          </Heading>

          <Box w={"full"} maxW={"breakpoint-md"} p={6} shadow={"md"} rounded={"lg"}>
            <VStack spacing={8} gap={4}>
              <Input
                placeholder={"Product Name"}
                name="name"
                borderColor={inputBorder}
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder={"Product Price"}
                name="price"
                borderColor={inputBorder}
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder={"Product Image URL"}
                name="image"
                borderColor={inputBorder}
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Button
                colorScheme={"blue"}
                onClick={handleAddProduct}
                bg={"gray.400"}
                _hover={{ bg: hoverBg }}
                _active={{ bg: hoverBg }}
                w={"full"}
              >
                Create Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    );
}

export default CreatePage