import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { SignInResolver } from "../../validations/SignIn";
import { useAuthContext } from "../../contexts/AuthContext";
import { Title } from "../../components/Title/Title";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";
import { BillingYouLogo } from "../../components/Icons/BillingYouLogo";

type Form = {
  email: string;
  password: string;
};

export function SignInScreen() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({ resolver: SignInResolver });
  const { signIn } = useAuthContext();

  async function onSubmit(values: Form) {
    await signIn(values.email, values.password);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <View style={styles.logoContainer}>
            <BillingYouLogo width={180} />
          </View>
          <View style={styles.title}>
            <Title>Access your account</Title>
          </View>
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
          <Button label="Sign In" onPress={handleSubmit(onSubmit)} />
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
    padding: 20,
  },
  title: {
    marginBottom: 30,
    alignItems: "center",
  },
});
