import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';

import InputGroup1 from './InputGroup1';
import InputGroup2 from './InputGroup2';

const SetProfileForm = ({ activeSet, setActive }) => {
  const router = useRouter();
  const [type, setType] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [amenitiesRating, setAmenitiesRating] = React.useState();
  const [safetyRating, setSafetyRating] = React.useState();

  const [amenities, setAmenities] = React.useState({
    libraries: false,
    scienceLabs: false,
    auditorium: false,
    assemblyArea: false,
    cafeteria: false,
    sportsFacilities: false,
    furniture: false,
    water: false,
    electricity: false,
    sanitation: false
  });

  const [courses, setCourses] = React.useState({
    english: false,
    maths: false,
    science: false,
    literature: false,
    socialScience: false
  });

  const { handleSubmit, control, setValue } = useForm();

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleRatingChange = (event) => {
    setAmenitiesRating(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleSafetyRatingChange = (event) => {
    setSafetyRating(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setValue(event.target.name, event.target.value);
  };

  const handleAmenityChange = (event) => {
    setAmenities({ ...amenities, [event.target.name]: event.target.checked });
    setValue('amenities', {
      ...amenities,
      [event.target.name]: event.target.checked
    });
  };

  const handleCoursesChange = (event) => {
    setCourses({ ...courses, [event.target.name]: event.target.checked });
    setValue('courses', {
      ...courses,
      [event.target.name]: event.target.checked
    });
  };

  const onSubmit = (data) => {
    router.push('/school/dashboard');
  };

  const schoolTypes = [
    {
      label: 'Private',
      value: 'private'
    },
    {
      label: 'Public (Government)',
      value: 'public'
    }
  ];

  const languages = [
    {
      label: 'English',
      value: 'english'
    },
    {
      label: 'French',
      value: 'french'
    },
    {
      label: 'Hindi',
      value: 'hindi'
    },
    {
      label: 'Portuguese',
      value: 'portuguese'
    }
  ];

  const rating = [
    {
      label: 'Bad (1)',
      value: '1'
    },
    {
      label: 'Somewhat bad (2)',
      value: '2'
    },
    {
      label: 'Somewhat good (3)',
      value: '3'
    },
    {
      label: 'Good (4)',
      value: '4'
    },
    {
      label: 'Great (5)',
      value: '5'
    }
  ];

  const allCourses = [
    {
      label: 'English',
      value: 'english'
    },
    {
      label: 'Mathematics',
      value: 'maths'
    },
    {
      label: 'Science',
      value: 'science'
    },
    {
      label: 'Literature',
      value: 'literature'
    },
    {
      label: 'Social Sciences',
      value: 'socialScience'
    }
  ];

  const basicAmenities = [
    {
      label: 'Libraries',
      value: 'libraries'
    },
    {
      label: 'Science Laboratories',
      value: 'scienceLabs'
    },
    {
      label: 'Auditorium',
      value: 'auditorium'
    },
    {
      label: 'Assembly Area',
      value: 'assemblyArea'
    },
    {
      label: 'Cafeteria',
      value: 'cafeteria'
    },
    {
      label: 'Sports Facilities',
      value: 'sportsFacilities'
    },
    {
      label: 'Tables & Chairs',
      value: 'furniture'
    },
    {
      label: 'Water',
      value: 'water'
    },
    {
      label: 'Electricity',
      value: 'electricity'
    },
    {
      label: 'Well-maintained sanitation facilities',
      value: 'sanitation'
    }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      {activeSet === 1 ? (
        <InputGroup1
          type={type}
          control={control}
          language={language}
          languages={languages}
          schoolTypes={schoolTypes}
          handleTypeChange={handleTypeChange}
          handleLanguageChange={handleLanguageChange}
        />
      ) : (
        <InputGroup2
          type={type}
          rating={rating}
          courses={courses}
          control={control}
          language={language}
          amenities={amenities}
          languages={languages}
          allCourses={allCourses}
          schoolTypes={schoolTypes}
          safetyRating={safetyRating}
          basicAmenities={basicAmenities}
          amenitiesRating={amenitiesRating}
          handleTypeChange={handleTypeChange}
          handleRatingChange={handleRatingChange}
          handleCoursesChange={handleCoursesChange}
          handleAmenityChange={handleAmenityChange}
          handleLanguageChange={handleLanguageChange}
          handleSafetyRatingChange={handleSafetyRatingChange}
        />
      )}
      {activeSet == 2 ? (
        <Box
          sx={{
            mt: 2,
            gap: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <Button variant="text" type="submit" onClick={() => setActive(1)}>
              Back
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            mt: 2,
            gap: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            variant="contained"
            type="submit"
            onClick={() => setActive(2)}
          >
            Continue
          </Button>
        </Box>
      )}
    </form>
  );
};

export default SetProfileForm;
