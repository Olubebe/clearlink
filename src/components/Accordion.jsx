import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

export default function AccordionExpandIcon() {
  const [expandedPanel, setExpandedPanel] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <div>
      <Accordion
        expanded={expandedPanel === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          backgroundColor: expandedPanel === "panel1" ? "#f0f0f0" : "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel1" ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            How many participants can join a ClearLink video conference?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          backgroundColor: expandedPanel === "panel2" ? "#f0f0f0" : "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel2" ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            Can I use ClearLink on multiple devices?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          backgroundColor: expandedPanel === "panel2" ? "#f0f0f0" : "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel2" ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            Is ClearLink compatible with other video conferencing platforms?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          backgroundColor: expandedPanel === "panel2" ? "#f0f0f0" : "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel2" ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            How does ClearLink ensure the security of my video conferences?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          backgroundColor: expandedPanel === "panel2" ? "#f0f0f0" : "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel2" ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            Do I need to download any software to use ClearLink?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          backgroundColor: expandedPanel === "panel2" ? "#f0f0f0" : "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel2" ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <AddCircleOutlineOutlinedIcon />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontWeight: "bold" }}>
            What kind of customer support does ClearLink provide?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
