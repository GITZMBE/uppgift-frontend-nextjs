"use client";

import Container from "@/src/components/Container";
import Modal from "@/src/components/Modal";
import ProductDetail from "@/src/components/ProductDetail";
import { useShowModal, useUpdateCart } from "@/src/hooks";
import CartItem from "@/src/models/cartItem";
import Product from "@/src/models/product";
import { cartState } from "@/src/recoil";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const ProductPage = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { showModal, setShowModal } = useShowModal();
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);
  const { quantity, setQuantity } = useUpdateCart(id);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASEURL + `/api/products/${id}`, {
      method: "GET",
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((res) => setProduct(res.product));
  }, [id]);

  const handleAddCartItem = () => {
    if (!product) {
      return;
    }

    setShowModal(true);
    if (quantity === 0) {
      setCart([...cart, new CartItem(product)]);
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Modal
        isOpen={showModal}
        success={true}
        title='Success'
        description='Item added to cart!'
      />
      <ProductDetail product={product} addToCart={handleAddCartItem} />
    </Container>
  );
};

export default ProductPage;
