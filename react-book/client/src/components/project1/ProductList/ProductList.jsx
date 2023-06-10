import React from 'react';
import Product from '../Products/Products';
import products from '../../../seed';

class ProductList extends React.Component {

    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       products: [],
    //     };
    //     this.handleProductUpVote = this.handleProductUpVote.bind(this);
    //   }
    state = {
        products: [],
    };

    componentDidMount() {
        this.setState({ products: products });
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    votes: product.votes + 1,
                };
            } else {
                return product;
            }
        });

        this.setState({ products: nextProducts });
    };

    render() {
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ))                                       // this sorting mutates the array and it could be dangerous


        // const { products } = this.state; or

        const productComponents = this.state.products.map((product) => (
            <div className='ui unstackable items' key={product.id}>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote={this.handleProductUpVote}
                />
            </div>
        ));

        return <div>{productComponents}</div>;
    }
}

export default ProductList;
