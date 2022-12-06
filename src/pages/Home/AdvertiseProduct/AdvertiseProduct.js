import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisePCard from "./AdvertisePCard";

const AdvertiseProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://resale-2rjgsfjco-ashik72.vercel.app/advertise`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  // console.log(advertise)

  return (
    <section className="mt-12">
      <div>
        <div className="py-5">
          <h4 className="text-center text-base text-4xl text-primary">
            Advertise
          </h4>
          <h4 className="text-2xl font-bold text-center my-4">
            Find Your Best Product
          </h4>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-10">
        {products?.map((product) => (
          <AdvertisePCard key={product._id} product={product}></AdvertisePCard>
        ))}
      </div>
    </section>
  );
};

export default AdvertiseProduct;
