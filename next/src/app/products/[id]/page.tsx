"use client";

import { Container, ProductDetail, Modal } from "@/components";
import { useShowModal, useUpdateCart } from "@/hooks";
import { CartItem, Product } from "@/models";
import { cartState } from "@/recoil";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const ProductPage = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { showModal, setShowModal } = useShowModal();
  const [cart, setCart] = useRecoilState<CartItem[]>(cartState);
  const { quantity, setQuantity } = useUpdateCart(id);

  useEffect(() => {
    fetch(`${window.location.origin || process.env.NEXT_PUBLIC_BASEURL}/api/products/${id}`, {
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
