<template>
  <div class="user-profile-page">
    <TheTitle>Profile</TheTitle>
    <el-row>
      <el-col :span="12">
        <div
          class="relative w-[150px] h-[150px] mb-8 overflow-hidden rounded-sm"
        >
          <el-avatar shape="square" :size="150" :src="form.avatar" />

          <el-upload
            accept="image/png, image/jpeg, image/jpg"
            :drag="false"
            :show-file-list="false"
            list-type="picture"
            :multiple="false"
            v-model="files"
            :on-change="onChangeFile"
          >
            <div
              class="w-full absolute bottom-0 left-0 flex justify-center bg-black/50"
            >
              <el-button v-if="isEdit" link
                ><span class="text-white">Upload</span></el-button
              >
            </div>
          </el-upload>
        </div>

        <el-form
          ref="formRef"
          label-position="left"
          label-width="150"
          :model="form"
          :rules="rules"
        >
          <el-form-item label="First Name" prop="firstName">
            <el-input v-if="isEdit" v-model="form.firstName" />
            <span v-else>{{ form.firstName }}</span>
          </el-form-item>
          <el-form-item label="Last Name" prop="lastName">
            <el-input v-if="isEdit" v-model="form.lastName"></el-input>
            <span v-else>{{ form.lastName }}</span>
          </el-form-item>
          <el-form-item label="Gender" prop="sex">
            <el-radio-group v-if="isEdit" v-model="form.sex">
              <el-radio
                v-for="(item, index) in sexList"
                :key="index"
                :value="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
            <span v-else>{{ currentSex }}</span>
          </el-form-item>
          <el-form-item label="Phone" prop="phone">
            <el-input v-if="isEdit" v-model="form.phone" />
            <span v-else>{{ form.phone }}</span>
          </el-form-item>
          <el-form-item label="Email contact" prop="emailContact">
            <el-input v-if="isEdit" v-model="form.emailContact" />
            <span v-else>{{ form.emailContact }}</span>
          </el-form-item>

          <el-form-item>
            <el-button v-if="!isEdit" type="primary" @click="openEdit"
              >Edit</el-button
            >
            <template v-else>
              <el-button type="primary" @click="onUpdate">Update</el-button>
              <el-button @click="onCancel">Cancel</el-button>
            </template>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules, UploadUserFile } from 'element-plus'
import type { Profile } from '~/types/customer'
definePageMeta({
  layout: 'dashboard',
})

const authStore = useAuthStore()

const sexList = [
  {
    label: 'Male',
    value: 0,
  },
  {
    label: 'Female',
    value: 1,
  },
]

const files = ref<UploadUserFile[]>([])

const currentSex = computed(
  () => sexList.find((item) => item.value === form.sex)?.label,
)

const form = reactive<Profile>({ ...(authStore.user.profile || {}) })
const formRef = ref<FormInstance>()

const rules = reactive<FormRules<Profile>>({
  firstName: Validate.required({ message: 'Please input the first name' }),
  lastName: Validate.required({ message: 'Please input the last name' }),
  phone: Validate.required({ message: 'Please input the phone number' }),
  sex: Validate.required({ message: 'Please input the sex' }),
  emailContact: [
    Validate.required({ message: 'Please input email contact' }),
    Validate.email({ message: 'Please input correct format email' }),
  ],
})

const isEdit = ref<boolean>(false)

const openEdit = () => {
  isEdit.value = true
}

const onCancel = () => {
  isEdit.value = false

  Object.assign(form, { ...authStore.user.profile })
}

const onUpdate = async () => {
  try {
    if (!formRef.value?.validate((valid: boolean) => valid)) return

    await useCustomFetch(
      `/api/customer/profile/${authStore.user.profile?._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    )

    ElNotification({
      title: 'Success',
      message: 'Update profile successfully',
      type: 'success',
    })

    await authStore.getUser()

    onCancel()
  } catch (error: any) {
    console.log(error)
  }
}

const onChangeFile = async (uploadFile: UploadUserFile) => {
  if (uploadFile.size && uploadFile.size >= 5 * 1024 * 1024) {
    ElNotification({
      type: 'error',
      message:
        'invalid file size, please choose file has size smaller than 5mb',
      position: 'top-right',
      duration: 4000,
    })
    files.value = []

    return
  }

  files.value = [uploadFile]

  form.avatar = `data:image/png;base64,${await convertFileToBase64(uploadFile.raw as File)}`
}
</script>
