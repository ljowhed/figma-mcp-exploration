import type { Option, Teacher } from '~/types/schedule'

export const schoolUnits: Option[] = [
  { label: 'SDH Lippo Village', value: 'lippo-village' },
  { label: 'SDH Kemang Village', value: 'kemang-village' },
  { label: 'SDH Bintaro', value: 'bintaro' },
  { label: 'SDH Bogor', value: 'bogor' }
]

export const academicYears: Option[] = [
  { label: '2024/2025', value: '2024-2025' },
  { label: '2025/2026', value: '2025-2026' },
  { label: '2026/2027', value: '2026-2027' }
]

export const grades: Option[] = [
  { label: 'Grade 1', value: '1' },
  { label: 'Grade 2', value: '2' },
  { label: 'Grade 3', value: '3' },
  { label: 'Grade 4', value: '4' },
  { label: 'Grade 5', value: '5' },
  { label: 'Grade 6', value: '6' },
  { label: 'Grade 7', value: '7' },
  { label: 'Grade 8', value: '8' },
  { label: 'Grade 9', value: '9' },
  { label: 'Grade 10', value: '10' },
  { label: 'Grade 11', value: '11' },
  { label: 'Grade 12', value: '12' }
]

export const gradeGroups: Option[] = [
  { label: 'Group A', value: 'a' },
  { label: 'Group B', value: 'b' },
  { label: 'Group C', value: 'c' }
]

export const dates: Option[] = [
  { label: '12 November 2026', value: '2026-11-12' },
  { label: '19 November 2026', value: '2026-11-19' },
  { label: '26 November 2026', value: '2026-11-26' },
  { label: '3 December 2026', value: '2026-12-03' }
]

export const times: Option[] = [
  { label: '07:00 - 08:00', value: '07:00-08:00' },
  { label: '08:00 - 09:30', value: '08:00-09:30' },
  { label: '09:00 - 10:00', value: '09:00-10:00' },
  { label: '10:00 - 11:30', value: '10:00-11:30' },
  { label: '13:00 - 14:00', value: '13:00-14:00' }
]

export const timezones: Option[] = [
  { label: 'WIB', value: 'WIB' },
  { label: 'WITA', value: 'WITA' },
  { label: 'WIT', value: 'WIT' }
]

export const durations: Option[] = [
  { label: '30 minutes', value: '30' },
  { label: '45 minutes', value: '45' },
  { label: '60 minutes', value: '60' },
  { label: '90 minutes', value: '90' }
]

export const testTypes: Option[] = [
  { label: 'Written Test', value: 'written' },
  { label: 'Oral Test', value: 'oral' },
  { label: 'Practical Test', value: 'practical' }
]

export const teachers: Teacher[] = [
  { name: 'Robert Santoso', email: 'robert.santoso@sdh.sch.id' },
  { name: 'Anita Wijaya', email: 'anita.wijaya@sdh.sch.id' },
  { name: 'Budi Hartono', email: 'budi.hartono@sdh.sch.id' },
  { name: 'Citra Lestari', email: 'citra.lestari@sdh.sch.id' }
]
