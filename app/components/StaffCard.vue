<script setup lang="ts">
import type { StaffMember, Teacher } from '~/types/schedule'

const props = defineProps<{
  member: StaffMember
  index: number
  teachers: Teacher[]
}>()

const registrationOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' }
]

const teacherOptions = computed(() =>
  props.teachers.map(teacher => ({ label: teacher.name, value: teacher.name }))
)

function setRegistered(value: string) {
  props.member.registered = value === 'no' ? 'no' : 'yes'
  props.member.name = ''
  props.member.email = ''
}

function setTeacher(name: string) {
  props.member.name = name
  props.member.email = props.teachers.find(teacher => teacher.name === name)?.email ?? ''
}

function setManualName(event: Event) {
  props.member.name = (event.target as HTMLInputElement).value
  props.member.email = ''
}
</script>

<template>
  <article class="staff-card">
    <h3 class="staff-title">
      Teacher/Staff Information {{ index + 1 }}
    </h3>
    <RadioGroup
      :model-value="member.registered"
      label="Is the teacher/staff registered?"
      required
      :name="`registered-${member.id}`"
      :options="registrationOptions"
      @update:model-value="setRegistered"
    />
    <div class="field-grid">
      <SelectField
        v-if="member.registered === 'yes'"
        :model-value="member.name"
        label="Teacher/Staff Name"
        required
        placeholder="Select teacher or staff name"
        :options="teacherOptions"
        @update:model-value="setTeacher"
      />
      <div v-else class="field">
        <FormLabel text="Teacher/Staff Name" required />
        <div class="control">
          <input
            :value="member.name"
            type="text"
            placeholder="Enter teacher or staff name"
            aria-label="Teacher/Staff Name"
            @input="setManualName"
          >
        </div>
      </div>
      <TextField
        label="SDH Email"
        :model-value="member.email"
        placeholder="Automatically filled based on the selected teacher or staff"
      />
    </div>
  </article>
</template>
