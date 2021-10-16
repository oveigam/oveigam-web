

const SectionTitle = ({ children, left, right, style }) => {

    let containerCSS = styles.container
    if (style) {
        containerCSS = {
            ...styles.container,
            ...style
        }
    }

    return (
        <div style={containerCSS}>
            {
                left &&
                <>
                    <div style={styles.indent} />
                    <h2>{children}</h2>
                </>
            }
            <div style={styles.separator} />
            {
                right &&
                <>
                    <h2>{children}</h2>
                    <div style={styles.indent} />
                </>
            }

        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 100,
        marginBottom: 25
    },
    separator: {
        flex: 1,
        height: 1,
        borderRadius: 2,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#2c2c2c'
    },
    indent: {
        width: 25,
        height: 1,
        borderRadius: 2,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#2c2c2c'
    }
}

export default SectionTitle;