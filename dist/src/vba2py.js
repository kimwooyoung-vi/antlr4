import antlr4 from 'antlr4';
import vbaLexer from '../antlr4-tool-gen/vbaLexer';
import vbaParser from '../antlr4-tool-gen/vbaParser';
import vbaVisitor from '../antlr4-tool-gen/vbaVisitor';
import vbaListener from '../antlr4-tool-gen/vbaListener';
class customVisitor extends vbaVisitor {
    constructor() {
        super(...arguments);
        this.visitAmbiguousIdentifier = (ctx) => {
            const identifierText = ctx.getText();
            console.log(`Visiting ambiguous identifier: ${identifierText}`);
        };
        this.visitSubStmt = (ctx) => {
            const SubStmtContext = ctx.getText();
            console.log(`Visiting sub routine: ${SubStmtContext}`);
        };
    }
}
class customListener extends vbaListener {
    constructor() {
        super();
        this.exitAmbiguousIdentifier = (ctx) => {
            const identifierText = ctx.getText();
            console.log(`Ambiguous identifier found: ${identifierText}`);
        };
    }
}
const input = `Sub Example()
    Dim x As Integer
    x = 10
    Print "Value of x is " & x
End Sub`;
const chars = antlr4.CharStreams.fromString(input);
const lexer = new vbaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new vbaParser(tokens);
const tree = parser.startRule();
const visitor = new customVisitor();
visitor.visit(tree);
