import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/product";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={12}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color={"green.400"}
          textAlign="center"
          mb={8}
        >
          Current Products 📦
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
          gap={6}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="green.400"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;



