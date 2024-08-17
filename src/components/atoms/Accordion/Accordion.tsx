
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Module } from '../../../@types/module';
import { Button } from '../Button/Button';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Lesson } from '../../../@types/lesson';
import { uuidv4 } from '../../../pages/CreateCourse/CreateCourse';

const AccordionExpand = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface IAccordion {
  modules?: Module[]
  addNewLesson: (moduleId: string, lesson: Lesson) => void
}

export const Accordion = ({ modules = [], addNewLesson }: IAccordion) => {

  const [expanded, setExpanded] = useState<string>("0");
  const [expandedLesson, setExpandedLesson] = useState<string>("0");

  const handleChange = (moduleIdExpanded: string) => {
    if (moduleIdExpanded) {
      const isExpanded = moduleIdExpanded === expanded ? "-1" : moduleIdExpanded
      setExpanded(isExpanded)
    }
  };

  return (
    <div>
      {modules.map((module) => {

        const addLesson = () => {
          const lesson: Lesson = { id: uuidv4(), title: `${modules?.length} - Lição`, description: `${modules?.length} - descricao`, content: `${modules?.length} - content` }

          addNewLesson(module.id, lesson)
        }


        return (
          <AccordionExpand expanded={expanded === module.id} onChange={() => handleChange(module?.id)} key={module.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {module.title} - {module.description}
            </AccordionSummary>
            <AccordionDetails>
              {module.lessons?.map((lesson) => {


                const handleExpandedLesson = (moduleIdExpanded: string) => {
                  if (moduleIdExpanded) {
                    const isExpanded = moduleIdExpanded === expandedLesson ? "-1" : moduleIdExpanded
                    setExpandedLesson(isExpanded)
                  }
                };

                return (
                  <AccordionExpand expanded={expandedLesson === lesson.id} onChange={() => handleExpandedLesson(lesson.id)} key={module.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      {lesson.title} - {lesson.description}
                    </AccordionSummary>
                    <AccordionDetails>
                      {lesson.description}
                    </AccordionDetails>
                  </AccordionExpand>
                )
              })}


              <Button sx={{ marginTop: 2 }} variant='outlined' startIcon={<AddBoxOutlinedIcon />} onClick={() => addLesson()}>Adicionar nova lição</Button>
            </AccordionDetails>
          </AccordionExpand>
        )
      })}

    </div>
  );
}