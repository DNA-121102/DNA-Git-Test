function generatePascalTriangle(rows) {
    let triangle = [];

    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1; // Elemen pertama setiap baris
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1; // Elemen terakhir setiap baris
    }

    return triangle;
}

function printPascalTriangle(triangle) {
    let rows = triangle.length;
    let output = "";

    for (let i = 0; i < rows; i++) {
        // Tambahkan spasi untuk membuat bentuk segitiga
        output += " ".repeat(rows - i - 1);

        // Tambahkan elemen dari baris i
        for (let j = 0; j <= i; j++) {
            output += triangle[i][j] + " ";
        }

        output += "\n"; // Baris baru
    }

    console.log(output);
}

// Contoh penggunaan
let rows = 5; // Jumlah baris
let pascalTriangle = generatePascalTriangle(rows);
printPascalTriangle(pascalTriangle);
