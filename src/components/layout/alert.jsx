import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { FaTimesCircle } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && <FaTimesCircle className="mt-2" />}
        <p
          className={`flex-1 text-base font-semibold leading-7 ${
            alert.type === "error" ? "text-red-500" : "text-white"
          }`}
        >
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
