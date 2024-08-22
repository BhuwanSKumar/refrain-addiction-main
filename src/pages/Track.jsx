import React from 'react'
import { Sidebar } from "../components"

import { CheckCircleIcon, ChartBarIcon, ClockIcon, CalendarIcon } from '@heroicons/react/outline';

const ProgressBar = ({ value, max }) => {
  const progress = (value / max) * 100;

  return (
    <div className="relative h-2 bg-gray-200 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};


function Track() {

  const activeUsers = 250;
  const recoveredUsers = 180;
  const weeklyAssessments = 150;
  const dailyAssessments = 75;
  const monthlyAssessments = 300;

  const totalAssessments = weeklyAssessments + dailyAssessments + monthlyAssessments;


  return (
    <>
      <div className='flex'>
        <div className='h-screen sticky top-0'>
          <Sidebar />
        </div>
          <div className='w-full'>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-blue-100 rounded-lg shadow-md mx-auto">
          <CheckCircleIcon className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Active Users</h2>
          <p className="text-3xl font-bold text-blue-500 text-center">{activeUsers}</p>
          <ProgressBar value={recoveredUsers} max={activeUsers} />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Recovered Users: {recoveredUsers}/{activeUsers}
          </p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg shadow-md mx-auto">
          <ChartBarIcon className="w-6 h-6 text-green-500 mb-2 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Weekly Assessments</h2>
          <p className="text-3xl font-bold text-green-500 text-center">{weeklyAssessments}</p>
          <ProgressBar value={weeklyAssessments} max={totalAssessments} />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Recovered Users: {weeklyAssessments}/{totalAssessments}
          </p>
        </div>

        <div className="p-4 bg-yellow-100 rounded-lg shadow-md mx-auto">
          <ClockIcon className="w-6 h-6 text-yellow-500 mb-2 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Daily Assessments</h2>
          <p className="text-3xl font-bold text-yellow-500 text-center">{dailyAssessments}</p>
          <ProgressBar value={dailyAssessments} max={totalAssessments} />
           <p className="text-sm text-gray-500 mt-2 text-center">
            Recovered Users: {dailyAssessments}/{totalAssessments}
          </p>
        </div>

        <div className="p-4 bg-purple-100 rounded-lg shadow-md mx-auto">
          <CalendarIcon className="w-6 h-6 text-purple-500 mb-2 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-center">Monthly Assessments</h2>
          <p className="text-3xl font-bold text-purple-500 text-center">{monthlyAssessments}</p>
          <ProgressBar value={monthlyAssessments} max={totalAssessments} />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Recovered Users: {monthlyAssessments}/{totalAssessments}
          </p>
        </div>
      </div>
    </div>
          </div>
      </div>
    </>
  )
}

export default Track