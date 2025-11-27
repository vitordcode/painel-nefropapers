
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface ResetPasswordEmailProps {
    resetUrl: string;
    userEmail: string;
}

const ForgotPasswordEmail = (props: ResetPasswordEmailProps) => {
    const { resetUrl, userEmail } = props;

    return (
        <Html lang="en" dir="ltr">
            <Head />
            <Preview>Redefinir senha - Ação necessária</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
                        {/* Header */}
                        <Section className="text-center mb-[32px]">
                            <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                                Solicitação de redefinição de senha
                            </Heading>
                            <Text className="text-[16px] text-gray-600 m-0">
                                Recebemos uma solicitação para redefinir sua senha
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="mb-[32px]">
                            <Text className="text-[16px] text-gray-700 mb-[16px] leading-[24px]">
                                Olá,
                            </Text>
                            <Text className="text-[16px] text-gray-700 mb-[16px] leading-[24px]">
                                Recebemos uma solicitação para redefinir a senha para sua conta associada com <strong>{userEmail}</strong>.
                            </Text>
                            <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                                Se você fez esta solicitação, clique no botão abaixo para redefinir sua senha. Este link expirará em 24 horas por motivos de segurança.
                            </Text>

                            {/* Reset Button */}
                            <Section className="text-center mb-[24px]">
                                <Button
                                    href={resetUrl}
                                    className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                                >
                                    Redefinir senha
                                </Button>
                            </Section>

                            <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                                Se o botão não funcionar, você pode copiar e colar este link no seu navegador:
                            </Text>
                            <Text className="text-[14px] text-blue-600 mb-[24px] break-all">
                                <Link href={resetUrl} className="text-blue-600 underline">
                                    {resetUrl}
                                </Link>
                            </Text>

                            <Hr className="border-gray-200 my-[24px]" />

                            <Text className="text-[16px] text-gray-700 mb-[16px] leading-[24px]">
                                Se você tiver qualquer dúvida ou preocupação, por favor não hesite em contatar nosso time de suporte.
                            </Text>
                            <Text className="text-[16px] text-gray-700 leading-[24px]">
                                Atenciosamente,<br />
                                Nefropapers
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Hr className="border-gray-200 my-[32px]" />
                        <Section className="text-center">
                            <Text className="text-[12px] text-gray-500 m-0 mb-[8px]">
                                Este e-mail foi enviado para {userEmail}
                            </Text>
                            <Text className="text-[12px] text-gray-500 m-0 mb-[8px]">
                                © 2025 Nefropapers. Todos os direitos reservados.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ForgotPasswordEmail;