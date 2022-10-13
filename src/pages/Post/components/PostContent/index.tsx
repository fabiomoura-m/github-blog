import ReactMarkdown from 'react-markdown';
import { ContentContainer } from './styles';

interface PostContentProps {
    content: string;
}

export function PostContent({ content }: PostContentProps) {
    return (
        <ContentContainer>
            <ReactMarkdown children={content} />
        </ContentContainer>
    );
}
