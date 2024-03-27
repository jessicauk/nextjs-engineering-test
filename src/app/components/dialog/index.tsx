import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

interface DialogResponsiveProps {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAccept: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogResponsive({
  title,
  open,
  setOpen,
  onAccept,
}: DialogResponsiveProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    onAccept();
    setOpen(false);
  };

  return (
    <Dialog
      className=""
      fullScreen={fullScreen}
      maxWidth="md"
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      keepMounted
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: "bg-black text-white text-4xl shadow-inner	shadow-slate-200",
      }}
    >
      <DialogTitle id="responsive-dialog-title" className="capitalize">
        {title}
      </DialogTitle>
      <DialogContent className="flex flex-col justify-center items-center">
        <p className="text-xl">Are you sure you want to delete this item?</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          autoFocus
          className="bg-blue-700 text-white hover:bg-blue-400 shadow-lg shadow-blue-400/30 p-1.5 font-bold hover:bg-blue-400"
        >
          Close
        </Button>
        <Button
          onClick={handleAccept}
          autoFocus
          className="bg-red-600	text-white shadow-lg shadow-red-600/30 p-1.5 font-bold hover:bg-red-800"
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}
