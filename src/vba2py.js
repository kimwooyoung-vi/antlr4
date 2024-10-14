import antlr4 from 'antlr4';
import vbaLexer from '../antlr4-tool-gen/vbaLexer.js';
import vbaParser from '../antlr4-tool-gen/vbaParser.js';
import vbaVisitor from '../antlr4-tool-gen/vbaVisitor.js';

class PythonVisitor extends vbaVisitor {
    visitStartRule(ctx){
        if (Array.isArray(ctx)) {
            return ctx.map(function(child) {
                return child.accept(this);
            }, this);
        } else {
            return ctx.accept(this);
        }
    }
    

    visitDimStmt(ctx) {
        const varName = ctx.getText();
        return `    ${varName} = None  # Declaring ${varName}\n`;
    }

    visitAssignment(ctx) {
        const varName = ctx.getText();
        const expression = this.visit(ctx.expression());
        return `    ${varName} = ${expression}\n`;
    }

    visitPrintStatement(ctx) {
        const args = ctx.expression().map(expr => this.visit(expr)).join(', ');
        return `    print(${args})\n`;
    }
    // 1
    visitModule(ctx){
        return this.visitChildren(ctx);
    }
    // 10
    visitModuleBOdy(ctx){
        return this.visitChildren(ctx);
    }
    // 11
    visitModuleBodyElement(ctx){
        return this.visitChildren(ctx);
    }
    // 94
    visitSubStmt(ctx) {
        const subName = ctx.getText();
        return `def ${subName}():\n`;
    }
    // 130
    visitAmbiguousIdentifier(ctx){
        console.log(ctx.getText());
        return this.visitChildren(ctx);
    }
    // 146
    visitEndOfLine(ctx){
        return this.visitChildren(ctx);
    }
    // undefined
    visitUndefiend(ctx){
        return ctx.getText();
    }
    visitChildren(ctx) {
        const ruleMethodMap = {
            [vbaParser.RULE_subStmt]: 'visitSubStmt',
            [vbaParser.RULE_ambiguousIdentifier]: 'visitAmbiguousIdentifier',
            [vbaParser.RULE_startRule]: 'visitStartRule',
            // Add other rule mappings as needed
        };
    
        let result = '';
        if (ctx.children) {
            for (const child of ctx.children) {
                const ruleIndex = child.ruleIndex;
                const methodName = ruleMethodMap[ruleIndex];
    
                if (methodName) {
                    result += this[methodName](child);
                } else {
                    result += this.visitChildren(child);
                }
            }
        } else {
            console.log(ctx.getText());
        }
        return result;
    }
    

    visitTerminal(ctx) {
        return ctx.getText(); // 단말 노드 텍스트 반환
    }

    visitErrorNode(node) {
        console.error(`Error node found: ${node.getText()}`);
        return ''; // 오류 노드는 빈 문자열로 반환
    }

    visitExpression(ctx) {
        return ctx.getText(); // 표현식을 그대로 반환
    }
}

// 입력 코드
const input = `
Public Sub Module()
    Dim sd As Boolean
    Debug.Print "sd의 초기 값:", sd
End Sub

`;

// ANTLR 렉서 및 파서 생성
const chars = antlr4.CharStreams.fromString(input);
const lexer = new vbaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new vbaParser(tokens);
// const startContext = parser.startRule();

const startContext = parser.startRule();
// Visitor를 사용하여 트리 방문
const visitor = new PythonVisitor();
const pythonCode = visitor.visit(startContext);
console.log(pythonCode);
