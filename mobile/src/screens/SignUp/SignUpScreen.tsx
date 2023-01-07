import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Form/Button";
import { TextInput } from "../../components/Form/TextInput";
import { BillingYouLogo } from "../../components/Icons/BillingYouLogo";
import { Title } from "../../components/Title/Title";
import { useAuthContext } from "../../contexts/AuthContext";
import { SignUpResolver } from "../../validations/SignUp";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function SignUpScreen() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({ resolver: SignUpResolver });
  const { signUp } = useAuthContext();

  async function onSubmit(values: Form) {
    await signUp(values);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <View style={styles.logoContainer}>
            <BillingYouLogo width={180} />
          </View>
          <View style={styles.title}>
            <Title>Create your account</Title>
          </View>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, ...field } }) => (
              <TextInput
                placeholder="First name"
                keyboardType="default"
                autoCapitalize="words"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, ...field } }) => (
              <TextInput
                placeholder="Last name"
                keyboardType="default"
                autoCapitalize="words"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, ...field } }) => (
              <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, ...field } }) => (
              <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <Button label="Sign up" onPress={handleSubmit(onSubmit)} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  logoContainer: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  content: {
    padding: 10,
  },
  title: {
    marginBottom: 30,
    alignItems: "center",
  },
});
