// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
const Products = () => {
  // Data untuk kartu
  const cards = [
    {
      name: '910 Haze',
      image: 'https://via.placeholder.com/300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae ducimus ab atque expedita debitis soluta commodi ex ratione officia?',
      price: 100000,
    },
    {
      name: 'Adidas Manchester United 2012-2013',
      image: 'https://via.placeholder.com/300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae ducimus ab atque expedita debitis soluta commodi ex ratione officia?',
      price: 100000,
    },
    {
      name: 'Card 3',
      image: 'https://via.placeholder.com/300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae ducimus ab atque expedita debitis soluta commodi ex ratione officia?',
      price: 100000,
    },
    {
      name: 'Card 4',
      image: 'https://via.placeholder.com/300',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ratione',

      price: 100000,
    },
    {
      name: 'Card 4',
      image: 'https://via.placeholder.com/300',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae ducimus ab atque expedita debitis soluta commodi ex ratione officia?',
      price: 100000,
    },
  ];

  const checkDescriptionLength = (description, n = 75) => {
    if (description.length > n) {
      return description.slice(0, n) + '...';
    }
    return description;
  };

  return (
    <>
      <div className="max-w-screen-xl bg-inherit mx-auto p-4 dark:text-white">
        <h1 className="text-black dark:text-white text-center font-bold text-2xl">
          Check this out!!
        </h1>

        <section className=" my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-inherit dark:shadow rounded py-4 relative overflow-hidden group"
            >
              <div className="w-100 h-100 relative overflow-hidden rounded">
                <div className="absolute overflow-hidden bottom-[-50%] opacity-0 left-0 right-0 bg-black bg-opacity-20 text-white p-2 text-center group-hover:bottom-[0] group-hover:opacity-100 duration-300">
                  <p className="font-bold">{card.name}</p>
                </div>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-100 h-100 object-cover"
                />
              </div>
              <p className="text-sm text-center my-4">
                {checkDescriptionLength(card.description)}
              </p>

              <div className="flex justify-between">
                <p className="text-xl font-['Fjalla_One']">
                  Rp. {card.price.toLocaleString()}
                </p>
                <div className="w-8 h-8 bg-gray-100 rounded-sm">
                  <button className=" dark:bg-white text-blue-800 dark:text-black p-2  group/cart">
                    <PlusIcon className="w-4 h-4 hidden group-hover/cart:block font-bold" />
                    <ShoppingCartIcon className="w-4 h-4 group-hover/cart:hidden" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Products;
