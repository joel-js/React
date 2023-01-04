import React, { useRef } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Confirm = () => {
  const toast = useRef(null);

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  const confirmPosition = (position) => {
    confirmDialog({
      message: "Game Won",
      header: "Ending",
      icon: "pi pi-info-circle",
      position,
      accept,
      reject,
    });
  };

  return (
    <div>
      <Toast ref={toast} />

      <div className="card">
        <ConfirmDialog />
        <div className="grid">
          <div className="col-12">
            <Button
              onClick={() => confirmPosition("bottom")}
              icon="pi pi-arrow-up"
              label="Bottom"
              className="p-button-success mr-2"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
