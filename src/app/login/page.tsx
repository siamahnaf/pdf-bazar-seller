//Components
import Form from "@/Components/Login/Form";

//UI
import Container from "@/Components/UI/Container";

const Page = async () => {
    return (
        <Container>
            <div className="flex justify-center items-center h-screen">
                <Form />
            </div>
        </Container>
    );
};

export default Page;