import './menu-item.styles.scss';

const MenuItem = ({title, id, imageUrl, linkUrl, size}) => {
    return (
        <div className={`menu-item ${size}`}>
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"></span>
            </div>
        </div>
    )
}

export default MenuItem;
