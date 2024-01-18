import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import styles from "./Start.module.css";
import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className={styles.text}>
        <h2 className={styles.heading}> Learn And Play With Colors </h2>
        <div className={styles.start}>
          <button className={styles.strtbtn}>
            <NavLink className={styles.linknav} to={"/home"}>
              Start
            </NavLink>
          </button>
        </div>
      </div>

      <div className={styles.pop}>
        {["bottom"].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Header as="h3">{`How To Play`}</Popover.Header>
                <Popover.Body>
                  <strong>
                    1. Click on the color button displayed, To Change the
                    backgroundColor.
                    <br />
                    2. Enter the name of Color you want to add.
                  </strong>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary" className={styles.popbtn}>
              {" "}
              Instruction
            </Button>
          </OverlayTrigger>
        ))}
      </div>
    </>
  );
};
export default Start;
