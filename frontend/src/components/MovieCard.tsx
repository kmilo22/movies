import React from 'react';

interface MovieCardProps {
    movie: {
        title: string;
        category: string;
        price: number;
        description: string;
        image?: string;
    };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { title, category, price, description, image } = movie;
    return (
        <div className="movie-card">
            <img src={image || 'default.jpg'} alt={title} />
            <h3>{title}</h3>
            <p><strong>Category:</strong> {category}</p>
            <h4>Price:</h4>
            <p>
                {price}
            </p>
            <h4>Description:</h4>
            <p>{description}</p>
        </div>
    );
};

export default MovieCard;