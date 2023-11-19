'use client';
import { api } from '@/apis/instance.api';
import React, { useState } from 'react';

const page = async () => {
  const getSections = await api.get('performances?performanceId=1');
  console.log('getSections', getSections);
  return <div>Reservation Page</div>;
};

export default page;
