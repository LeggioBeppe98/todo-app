const customStyle = {
    boxShadow: "inset -1px 0 0rgba(0, 0, 0, 0.1)"
}

function getImageOrDefault(imageUrl){
    try{
        new URL(imageUrl);
        return imageUrl;
    } catch (error) {
        return defaultImage;
    }
}

export default function User({ user: {name, image} }) {
    return (
        <div className="d-flex align-items-center text-black text-decoration-none py-1" style={customStyle}>
            <img src={getImageOrDefault(image)} width="32" height="32" className="rounded-circle me-2"/>
            <strong>{name}</strong>
        </div>
        
    );
}
