import { api } from '@/apis/instance.api';
import Main from '@/components/performance/Main';
import React, { useCallback, useEffect, useState } from 'react';

const page = () => {
  const getDetailSchedules = async () => {
    return await api.get('performances?performanceId=1');
  };
  console.log('getDetailSchedules', getDetailSchedules());
  return (
    <div>
      <h3>Performance Page</h3>
      <Main sections={getDetailSchedules()} />
    </div>
  );
};

export default page;
