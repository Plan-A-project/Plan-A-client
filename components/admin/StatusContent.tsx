import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import formatAdminDate from "@/utils/formatAdminDate";

type MemberData = {
  memberId: number;
  universityCertificateUrl: string;
  realName: string;
  joinedAt: string;
  nickname: string;
  policyAccepted: string;
  status: string;
  universityEmail: string;
};
type TableProps = {
  data: MemberData[];
};
const StatusContent: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>유저 아이디</Th>
            <Th>닉네임</Th>
            <Th>실명</Th>
            <Th>가입 일자</Th>
            <Th>게시글 작성 동의 여부</Th>
            <Th>인증 첨부 파일</Th>
            <Th>인증 메일</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map(el => {
            return (
              <Tr key={el.memberId}>
                <Td>{el.memberId}</Td>
                <Td>{el.nickname}</Td>
                <Td>{el.realName}</Td>
                <Td>{formatAdminDate(el.joinedAt)}</Td>
                <Td>{el.policyAccepted}</Td>
                <Td>
                  <Link href={el.universityCertificateUrl} isExternal>
                    클릭해서 이미지 보기
                  </Link>
                </Td>
                <Td>{el.universityEmail}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default StatusContent;
