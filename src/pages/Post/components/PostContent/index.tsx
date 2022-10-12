import { ContentContainer } from './styles';

interface PostContentProps {
    content: string;
}

export function PostContent({ content }: PostContentProps) {
    return <ContentContainer>{content}</ContentContainer>;
}
