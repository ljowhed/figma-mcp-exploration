<script setup lang="ts">
import type { StaffMember } from '~/types/schedule'
import {
  academicYears,
  dates,
  durations,
  gradeGroups,
  grades,
  schoolUnits,
  teachers,
  testTypes,
  times,
  timezones
} from '~/data/options'

const schoolUnit = ref('')
const academicYear = ref('')
const gradeInput = ref('')
const grade = ref('')
const date = ref('')
const time = ref('')
const timezone = ref('WIB')
const duration = ref('')
const breakTime = ref(false)
const testType = ref('')
const quota = ref<number | null>(null)
const active = ref(true)

let nextStaffId = 2
const staff = ref<StaffMember[]>([
  { id: 1, registered: 'yes', name: '', email: '' }
])

const gradeOptions = computed(() => (gradeInput.value === 'group' ? gradeGroups : grades))

const gradeInputOptions = [
  { label: 'Grade', value: 'grade' },
  { label: 'Grade Group', value: 'group' }
]

watch(gradeInput, () => {
  grade.value = ''
})

const staffCount = computed(() => staff.value.filter(member => member.name.trim()).length)
const canAddStaff = computed(() => staff.value.length < 3)

const canSubmit = computed(() => {
  const required = [
    schoolUnit.value,
    academicYear.value,
    gradeInput.value,
    grade.value,
    date.value,
    time.value,
    duration.value,
    testType.value
  ]
  const staffReady = staff.value.every(member => member.name.trim())
  return required.every(Boolean) && quota.value !== null && quota.value > 0 && staffReady
})

function addStaff() {
  if (!canAddStaff.value) {
    return
  }
  staff.value.push({
    id: nextStaffId++,
    registered: 'yes',
    name: '',
    email: ''
  })
}

function resetForm() {
  schoolUnit.value = ''
  academicYear.value = ''
  gradeInput.value = ''
  grade.value = ''
  date.value = ''
  time.value = ''
  timezone.value = 'WIB'
  duration.value = ''
  breakTime.value = false
  testType.value = ''
  quota.value = null
  active.value = true
  nextStaffId = 2
  staff.value = [{ id: 1, registered: 'yes', name: '', email: '' }]
}
</script>

<template>
  <div class="page">
    <AppHeader />
    <main class="main page-pad">
      <div class="title-row">
        <button class="back-button" type="button" aria-label="Back">
          <img src="/icons/icon-back.svg" width="24" height="24" alt="">
        </button>
        <h1 class="page-title">
          Add Academic Test Schedule
        </h1>
      </div>

      <form class="form" @submit.prevent>
        <SectionCard title="General Information" icon="/icons/icon-general.svg">
          <div class="section-fields">
            <div class="field-grid">
              <SelectField
                v-model="schoolUnit"
                label="School Unit"
                required
                placeholder="Select school unit"
                :options="schoolUnits"
              />
              <SelectField
                v-model="academicYear"
                label="Academic Year"
                required
                placeholder="Select academic year"
                :options="academicYears"
              />
            </div>
            <div class="field-grid">
              <RadioGroup
                v-model="gradeInput"
                label="Grade Input By"
                required
                name="grade-input"
                :options="gradeInputOptions"
              />
              <SelectField
                v-model="grade"
                label="Grade"
                required
                placeholder="Select grade"
                :options="gradeOptions"
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Schedule Information" icon="/icons/icon-schedule.svg">
          <div class="section-fields">
            <SelectField
              v-model="date"
              label="Date"
              required
              placeholder="Select date"
              :options="dates"
            />
            <div class="field-grid">
              <SelectField
                v-model="time"
                v-model:suffix="timezone"
                label="Time"
                required
                placeholder="00:00 - 00:00"
                :options="times"
                :suffix-options="timezones"
              />
              <SelectField
                v-model="duration"
                label="Duration per Session"
                required
                placeholder="Select duration per session"
                :options="durations"
              />
            </div>
            <CheckboxField
              v-model="breakTime"
              label="Add Break Time"
              help="Set the break time for this schedule."
            />
            <SelectField
              v-model="testType"
              label="Test Type"
              required
              placeholder="Select test type"
              :options="testTypes"
            />
            <NumberField
              v-model="quota"
              label="Quota"
              required
              placeholder="Enter quota"
            />
            <ToggleField v-model="active" label="Schedule Status" />
          </div>
        </SectionCard>

        <SectionCard
          title="Teacher/Staff Information"
          icon="/icons/icon-people.svg"
          :icon-width="19"
          :icon-height="19"
        >
          <div class="section-fields">
            <InfoBanner :count="staffCount" :limit="3" />
            <div class="staff-list">
              <StaffCard
                v-for="(member, index) in staff"
                :key="member.id"
                :member="member"
                :index="index"
                :teachers="teachers"
              />
              <button class="btn btn-outline" type="button" :disabled="!canAddStaff" @click="addStaff">
                <img src="/icons/icon-plus-blue.svg" width="16" height="16" alt="">
                Add
              </button>
            </div>
          </div>
        </SectionCard>

        <div class="form-actions">
          <button class="btn btn-danger" type="button" @click="resetForm">
            Cancel
          </button>
          <button class="btn btn-solid" type="submit" :disabled="!canSubmit">
            Add
          </button>
        </div>
      </form>
    </main>
    <AppFooter />
  </div>
</template>
