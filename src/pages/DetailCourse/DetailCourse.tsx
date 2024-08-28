import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook/useStore";
import { Button } from "../../components/atoms/Button/Button";
import {

  PlusIcon,

} from "../../components/atoms/Icons/Icons";
import { ModalModule } from "../../components/organisms/ModalModule/ModalModule";
import { ModalLesson } from "../../components/organisms/ModalLesson/ModalLesson";
import {
  changeVisibilityModalCreateLesson,
  changeVisibilityModalCreateModule,
  changeVisibilityModalEditLesson,
  changeVisibilityModalEditModule,
} from "../../store/reducer/course/actions";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ModuleList } from "../../components/organisms/ModuleList/ModuleList";

export const DetailCourse = () => {
  const { courseId } = useParams();
  const { courses } = useAppSelector((state) => state.course);

  const selectedCourse = courses.find((course) => course.id === courseId);

  const {
    course: {
      openModalCreateModule,
      openModalEditModule,
      openModalCreateLesson,
      openModalEditLesson,
    },
  } = useAppSelector((state) => state);

  const openModalModule = openModalCreateModule || openModalEditModule;

  const openModalLesson = openModalCreateLesson || openModalEditLesson;

  const dispatch = useAppDispatch();

  const isEditModule = courseId && openModalEditModule;

  const handleCloseModalModule = () => {
    if (isEditModule) {
      dispatch(changeVisibilityModalEditModule(""));
    } else {
      dispatch(changeVisibilityModalCreateModule(""));
    }
  };

  const handleCloseModalLesson = () => {
    if (openModalEditLesson) {
      dispatch(changeVisibilityModalEditLesson(""));
    } else if (openModalCreateLesson) {
      dispatch(changeVisibilityModalCreateLesson(""));
    }
  };

  const handleAddNewModule = () => {
    dispatch(changeVisibilityModalCreateModule(courseId));
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "#000",

          }}

        >
          <IconButton
            onClick={handleBack}
            sx={{ marginLeft: "40px", marginTop: "20px", background: "#fff" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "40px 24px",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "0px 24px",
                justifyContent: "space-between",
                width: "100%",
                flexDirection: {
                  xs: "column-reverse", md: 'row',
                  lg: 'row',
                  xl: 'row',
                },
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "60%" }}
              >
                <Typography variant="h1" color="#fff">
                  {selectedCourse?.title}
                </Typography>
                <Typography variant="h5" color="#fff">
                  {selectedCourse?.description}
                </Typography>
              </Box>
              <img
                src="https://fakeimg.pl/400x400/"
                alt="img"
                style={{ borderRadius: "8px" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "80px 24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Modulos do curso</Typography>
            <Button
              variant="contained"
              onClick={() => handleAddNewModule()}
              startIcon={<PlusIcon />}
            >
              Adicionar novo modulo
            </Button>
          </Box>
          <ModuleList modules={selectedCourse?.modules} />
        </Box>
      </Box>
      <ModalModule
        open={openModalModule}
        handleClose={() => handleCloseModalModule()}
      />
      <ModalLesson
        open={openModalLesson}
        handleClose={() => handleCloseModalLesson()}
      />
    </>
  );
};
