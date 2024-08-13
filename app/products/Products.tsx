// components/ProductHighlights.js

import Carousel from 'components/Carousel/Carousel';
import ProductCard from './ProductCard';

const products = [
    {
        title: 'Salgado Especial',
        description: 'Delicioso salgado feito com ingredientes frescos e saborosos. Perfeito para qualquer evento!',
        image: '/assets/products/finger/img_1.jpeg', // Substitua pelo caminho real da imagem do salgado
    },
    {
        title: 'Doce Divino',
        description: 'Um doce irresistível que derrete na boca. Feito com amor e os melhores ingredientes!',
        image: '/assets/products/doce/img_1.jpeg', // Substitua pelo caminho real da imagem do doce
    },
    {
        title: 'Petisco Gourmet',
        description: 'Tudo o que há de fino unido por um palitinho <3',
        image: '/assets/products/finger/img_5.jpeg', // Substitua pelo caminho real da imagem do petisco
    },
    {
        title: 'Finger Food Criativo',
        description: 'Nossos finger foods são uma explosão de sabores em cada mordida. Ideal para eventos descontraídos!',
        image: '/assets/products/finger/img_4.jpeg', // Substitua pelo caminho real da imagem do finger food
    },
];

const ProductHighlights = () => {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-5xl font-moglan text-stack-300 text-center mb-8">Destaque dos Produtos Principais</h2>
            <Carousel className=" gap-8">
                {products.map(({ title, description, image }, index) => (
                    <ProductCard
                        description={description} image={image} title={title} key={index} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProductHighlights;
