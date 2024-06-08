import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title={t("faq.title")} subtitle={t("faq.subtitle")} />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.question1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.answer1")}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.question2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.answer2")}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.question3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.answer3")}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.question4")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.answer4")}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.question5")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.answer5")}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
