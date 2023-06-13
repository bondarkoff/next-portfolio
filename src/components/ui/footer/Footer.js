export const Footer = ({ loading = false }) => {
    return (
        <footer style={{ padding: '20px 0px 40px 0px' }}>
            <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: '200',
                    fontSize: '16px',
                }}>
                Created by {loading ? 'who?' : 'Yehor Bondarkov'}
            </p>
        </footer>
    );
};
