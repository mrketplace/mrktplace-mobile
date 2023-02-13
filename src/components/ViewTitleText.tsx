import PoppinsText from "./PoppinsText";
import styles from '../../styles.css';

export default function ViewTitleText(props: any) {
    // Component rendering
    return (
        <PoppinsText
            variant={"Bold"}
            style={styles.viewTitleText}
            content={props.title} />
    );
}