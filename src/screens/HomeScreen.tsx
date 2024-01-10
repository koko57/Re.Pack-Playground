import * as React from 'react';
import {Text} from 'react-native';

const StudentsScreen = React.lazy(
  () => import(/* webpackChunkName: "student" */ './StudentsScreen'),
);

const TeacherScreen = React.lazy(
  () => import(/* webpackChunkName: "teacher" */ './TeacherScreen'),
);

type User = {
  role: 'student' | 'teacher';
};

type Props = {
  user: User;
};

const HomeScreen = ({user}: Props) => {
  const Screen = React.useMemo(() => {
    return user.role === 'student' ? StudentsScreen : TeacherScreen;
  }, [user]);

  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <Screen />
    </React.Suspense>
  );
};

export default HomeScreen;
