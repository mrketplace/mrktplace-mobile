import styles from '../../styles.css';
import ArchivoText from "./ArchivoText";

export default function ViewTitleText(props: any) {
    // Component rendering
    return (
        <ArchivoText
            variant={"ExtraBold"}
            style={styles.viewTitleText}
            content={props.title} />
    );
}